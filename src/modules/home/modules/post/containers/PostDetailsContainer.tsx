import { Link, useParams, useSearchParams } from "react-router-dom";

const PostDetailsContainer = () => {
  const { id, name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const addIndexParam = (index: number) => {
    searchParams.append("id", String(index));
    setSearchParams(searchParams);
  };
  return (
    <>
      <span>
        Hello Post Detail ID: {id} Name: {name}
        {searchParams.get("show_title") &&
          ` Search: ${searchParams.get("show_title")}`}
      </span>
      <Link to="/">Go to Home</Link>
      <button onClick={() => addIndexParam(1)}>Go Back</button>
    </>
  );
};

export default PostDetailsContainer;
