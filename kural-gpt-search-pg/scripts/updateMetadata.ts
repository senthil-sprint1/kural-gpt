import details from "../data/detail.json";
import kurals from "../data/gpt/00_all_kurals.json";
export async function updateMetadata() {
  for (const iDetail of details[0].section.detail) {
    console.log("iDetail", iDetail);
    for (const chapterGroup of iDetail.chapterGroup.detail) {
      console.log("chapterGroup", chapterGroup);
      for (const chapter of chapterGroup.chapters.detail) {
        console.log("chapter", chapter);
      }
    }
  }
}
