import { readFile } from "fs/promises";
import path from "path";

async function loadFont(filename: string): Promise<ArrayBuffer> {
  const fontPath = path.join(process.cwd(), "assets/fonts", filename);
  const buffer = await readFile(fontPath);
  // Buffer do Node.js não é ArrayBuffer diretamente — essa conversão
  // extrai o ArrayBuffer subjacente com offset e tamanho corretos.
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer;
}

export async function getOgFonts() {
  const [regular, bold, transducerExtended] = await Promise.all([
    loadFont("saira-regular.ttf"),
    loadFont("saira-bold.ttf"),
    loadFont("transducer-extendedregular.ttf"),
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
    {
      name: "TransducerExtended",
      data: transducerExtended,
      style: "normal" as const,
      weight: 400 as const,
    },
  ];
}
