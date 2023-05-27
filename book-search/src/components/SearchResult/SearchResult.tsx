import React from "react";

export type ISearchResult = {
  result: {
    isbn: string;
    name: string;
    author: string;
    coverSrc: string;
    abstract: string;
  };
};

function SearchResult({ result }: ISearchResult): React.JSX.Element {
  return (
    <article className="search-result">
      <div className="image-container">
        <img alt="" src={result.coverSrc} />
      </div>
      <div className="description">
        <p className="name">{result.name}</p>
        <p className="author">
          By <b>{result.author}</b>
        </p>
        <p className="abstract">{result.abstract}</p>
      </div>
    </article>
  );
}

export default SearchResult;
