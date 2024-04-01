import kurals from "@/public/kurals.json";
import "./style.css";
import { Meta } from "@/src/components/Meta";
export default function Page({ params }: { params: { slug: string } }) {
  const matchingKural = tryFindMatchingKural(params.slug);

  return (
    <div className="row justify-content-md-center">
      <div className="col-lg-9">
        {!matchingKural && <div> This is not a valid URL. You might have copied the partial URL. Try again. </div>}
        {matchingKural && (
          <div className="mt-4">
            <div className="">{matchingKural.kuralInfo.line1}</div>
            <div>
              {matchingKural.kuralInfo.line2} <span className="ms-2 form-text">{matchingKural.kuralInfo.number}</span>
            </div>
            <div className="mt-2 text-muted fst-italic">{matchingKural.kuralInfo.translation}</div>

            <Meta kuralId={matchingKural.kuralInfo.number} showNav classNames="mt-3" />
            <div className="my-4 border border-dark" />

            <Explanation who="சாலமன் பாப்பையா" explanation={matchingKural.kuralInfo.sp} />
            <Explanation who="மு.கருணாநிதி" explanation={matchingKural.kuralInfo.mk} />
            <Explanation who="மு.வரதராசனார்" explanation={matchingKural.kuralInfo.mv} />

            <Explanation who="Unknown" explanation={matchingKural.kuralInfo.explanation} />
            <Explanation who="ChatGPT 4" explanation={matchingKural.kuralInfo.gptExplanation} />
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
    if (matching) {
      return { kuralInfo: matching };
    }
  }
}
