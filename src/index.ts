import { createSdk } from "@opendesign/sdk";

const OPEN_DESIGN_TOKEN = "";

async function main() {
  const sdk = createSdk({ token: OPEN_DESIGN_TOKEN });
  sdk.setGlobalFontDirectory("./fonts");
  sdk.setGlobalFallbackFonts(["Inter-Regular"]);

  const design = await sdk.importDesignFile("./Preview_text_multi.ai");

  const artboard = design.getArtboards()[0];

  const rootLayers = await artboard.getRootLayers();

  for (const rootLayer of rootLayers) {
    const nestedLayers = rootLayer.getNestedLayers();
    for (const nestedLayer of nestedLayers) {
      if (nestedLayer.type === "textLayer") {
        const bounds = await nestedLayer.getBounds();
        // IT SHOULD PRINT BOUNDS
        console.log(bounds);
      }
    }
  }

  sdk.destroy();
}

main();
