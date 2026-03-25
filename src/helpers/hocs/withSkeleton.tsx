import { DirectionType, SkeletonType } from '@/interfaces'

import { ComponentType } from 'react'

import Skeleton from '@/components/Skeleton/Skeleton.tsx'

interface Props {
  isLoading: boolean
}

const WithSkeleton = <P extends object>(
  Component: ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType,
) => {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...rest } = props
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />
    }

    return <Component {...(rest as P)} />
  }
}

export default WithSkeleton
