import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose Approval", () => {
  it("track Aged Brie", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 5, 5)]);
    let items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.eq(4);
    expect(items[0].quality).to.eq(6);
    gildedRose.updateQuality(); // 2
    gildedRose.updateQuality(); //3
    gildedRose.updateQuality(); //4
    expect(items[0].sellIn).to.eq(1);
    gildedRose.updateQuality(); //5
    expect(items[0].sellIn).to.eq(0);
    expect(items[0].quality).to.eq(10);
    gildedRose.updateQuality(); //6
    expect(items[0].sellIn).to.eq(-1);
    expect(items[0].quality).to.eq(12);
  });
});
