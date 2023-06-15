import React from 'react'

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ setQuery }: Props) => {
  return (
    <div>SearchInput</div>
  )
}

export default SearchInput