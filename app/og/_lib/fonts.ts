import { readFile } from "fs/promises";
import path from "path";

async function loadFont(filename: string): Promise<ArrayBuffer> {
  const fontPath = path.join(process.cwd(), "app/og/_fonts", filename);
  const buffer = await readFile(fontPath);
  // Buffer do Node.js não é ArrayBuffer diretamente — essa conversão
  // extrai o ArrayBuffer subjacente com offset e tamanho corretos.
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer;
}

export async function getOgFonts() {
  const [regular, bold] = await Promise.all([
    loadFont("Saira-Regular.ttf"),
    loadFont("Saira-Bold.ttf"),
  ]);

  return [
    {
      name: "Saira",
      data: regular,
      style: "normal" as const,
      weight: 400 as const,
    },
    {
      name: "Saira",
      data: bold,
      style: "normal" as const,
      weight: 700 as const,
    },
  ];
}
