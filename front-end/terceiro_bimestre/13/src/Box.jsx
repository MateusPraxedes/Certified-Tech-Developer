import { useEffect } from "react"

const Box = () => {

  useEffect(() => {
  () => {console.log("desmontei")}
  }, [])

  return (
    <div>Essa box está sendo monstrada</div>
  )
}

export default Box