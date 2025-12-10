import { readFile, writeFile, mkdir } from "node:fs/promises"
import { Readable } from "node:stream"
import { extname, join } from "node:path"

const baseUrl = "https://tombraider.com"
const outputFolder = "static"

// Download a file
async function downloadFile(url: string, path: string) {
    console.log(url)
    const response = await fetch(url)
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

    if (chunks.length == 0) {
        throw new Error("Unable to locate any chunks")
    }

    for (const chunk of chunks) {
        const url = baseUrl + chunk[0]
        await downloadNormalized(url)
    }
}

// Download all chunks from the manifest
async function downloadFromManifest() {
    const manifest = await readFile("static/_buildManifest.js", { encoding: "utf-8" })
    const chunks = manifest.matchAll(/static\/[A-z0-9-_\/]+\.(js|css)/g)

    for (const chunk of chunks) {
        const url = baseUrl + "/_next/" + chunk[0]
        await downloadNormalized(url)
    }
}

await mkdir(outputFolder, { recursive: true })

// Download all chunks from the main body
await downloadFromBody()

// Read the download manifest and download all chunks
await downloadFromManifest()