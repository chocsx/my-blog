import styled from "styled-components"
import media from "styled-media-query"
import Image from "next/image"

export const AvatarWrapper = styled(Image)`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;

  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}
`
