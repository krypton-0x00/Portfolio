import ReviewCard from "./ReviewCard";

function ReviewContainer() {
  return (
    <>
      <div className="px-12 ">
        <h1 className="text-4xl font-archivo text-white ">Reviews</h1>
        <p className="font-ubuntu text-white">What People Say About Me</p>
      </div>
      <div className="md:flex md:flex-wrap  ">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </>
  );
}

export default ReviewContainer;
