import React from 'react'
import ContentLoader from "react-content-loader"

export default function LoadingBox() {
  return (
    <ContentLoader 
    speed={2}
    width={300}
    height={460}
    viewBox="0 0 300 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="8" ry="8" width="285" height="285" /> 
    <rect x="0" y="361" rx="0" ry="0" width="285" height="25" /> 
    <rect x="0" y="306" rx="8" ry="8" width="285" height="35" /> 
    <rect x="0" y="414" rx="10" ry="10" width="150" height="30" />
  </ContentLoader>
  )
}
