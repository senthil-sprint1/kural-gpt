import kurals from "@/public/kurals.json";

export default function Page({ params }: { params: { slug: string } }) {
  const kural = tryFindMatchingKural(params.slug);

  return (
    <div className="row justify-content-md-center">
      <div className="col-lg-9">
        {!kural && <div> This is not a valid URL. You might have copied the partial URL. Try again. </div>}
        {kural && (
          <div className="mt-4">
            <div className="">{kural.line1}</div>
            <div>
              {kural.line2} <span className="ms-2 form-text">{kural.number}</span>
            </div>
            <div className="mt-2 text-muted fst-italic">{kural.translation}</div>
            <div className="my-4 border border-dark" />

            <Explanation who="சாலமன் பாப்பையா" explanation={kural.sp} />
            <Explanation who="மு.கருணாநிதி" explanation={kural.mk} />
            <Explanation who="மு.வரதராசனார்" explanation={kural.mv} />

            <Explanation who="Unknown" explanation={kural.explanation} />
            <Explanation who="ChatGPT 4" explanation={kural.gptExplanation} />
          </div>
        )}
      </div>
    </div>
  );
}

function Explanation({ who, explanation }: { who: string; explanation: string }) {
  return (
    <div>
      <div>{explanation}</div>
      <div className="form-text my-2"> - {who}</div>
      <div className="border my-4 " />
    </div>
  );
}

function tryFindMatchingKural(kuralNumber: string) {
  const kuralId = parseInt(kuralNumber);
  if (kuralId) {
    const matching = kurals.find((k) => k.number === kuralId);
    return matching;
  }
}
