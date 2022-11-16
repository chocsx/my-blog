import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"
import { siteMetadata } from "../../../config"

import * as S from "./styled"

const Profile = () => {
  return (
    <S.ProfileWrapper>
      <S.ProfileLink href="/">
        <Avatar />
        <S.ProfileAuthor>
          {siteMetadata.title}
          <S.ProfilePosition>{siteMetadata.position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{siteMetadata.description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
