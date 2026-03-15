import Skeleton from "../../components/Skeleton/Skeleton.jsx";

const WithSkeleton = (Component, type, count, direction) => {
  return function WithSkeleton(props) {
    const {isLoading, ...rest} = props
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />
    }

    return <Component {...rest} />
  }
}

export default WithSkeleton