import React from "react"
import { Link } from "gatsby"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}>página anterior</Link>}
    {currentPage} de {numPages}
    {!isLast && <Link to={nextPage}>próxima página </Link>}
  </S.PaginationWrapper>
}

export default Pagination
