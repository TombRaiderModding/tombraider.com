import { readFile, writeFile, mkdir } from "node:fs/promises"
import { Readable } from "node:stream"
import { extname, join } from "node:path"

const baseUrl = "https://tombraider.com"
const outputFolder = "static"

// Download a file
async function downloadFile(url: string, path: string) {
    console.log(url)
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Unable to download " + url)
    }

    await writeFile(join(outputFolder, path), Readable.fromWeb(response.body))
}

// Download a file and normalize the local file name
async function downloadNormalized(url: string) {
    const name = url.split("/").pop()!

    // Remove the content hash from the name
    const normalized = name.split(/(-[a-z0-9]+|\.)/)[0]

    await downloadFile(url, normalized + extname(name))
}

// Download all chunks from the main body
async function downloadFromBody() {
    const body = await fetch(baseUrl).then(x => x.text())
    const chunks = [...body.matchAll(/\/_next\/static\/[A-z0-9-_\/]+\.(js|css)/g)]
    const buildId = body.match(/"buildId":"([A-z0-9-_]+)"/)

    if (chunks.length == 0) {
        throw new Error("Unable to locate any chunks")
    }

    if (!buildId) {
        throw new Error("Unable to locale build ID")
    }

    for (const chunk of chunks) {
        const url = baseUrl + chunk[0]
        await downloadNormalized(url)
    }

    return [buildId[1]]
}

// Download all chunks from the build manifest
async function downloadFromManifest() {
    const manifest = await readFile("static/_buildManifest.js", { encoding: "utf-8" })
    const chunks = manifest.matchAll(/static\/[A-z0-9-_\/]+\.(js|css)/g)

    for (const chunk of chunks) {
        const url = baseUrl + "/_next/" + chunk[0]
        await downloadNormalized(url)
    }
}

// Download all static data from the manifest
async function downloadStaticData(buildId: string) {
    const manifest = await readFile("static/_ssgManifest.js", { encoding: "utf-8" })
    const datas = manifest.replaceAll("\\u002F", "/").matchAll(/"(\/[A-z0-9/-]{0,})"/g)

    for (const data of datas) {
        const url = baseUrl + "/_next/data/" + buildId + data[1] + (data[1] == "/" ? "index.json" : ".json")

        // Unable to download from paths with placeholders for now
        if (url.includes("[")) {
            continue
        }

        await downloadNormalized(url)
    }
}

await mkdir(outputFolder, { recursive: true })

// Download all chunks from the main body
const [buildId] = await downloadFromBody()

// Read the build manifest and download all chunks
await downloadFromManifest()

// Read the static data manifest and download all data
await downloadStaticData(buildId)