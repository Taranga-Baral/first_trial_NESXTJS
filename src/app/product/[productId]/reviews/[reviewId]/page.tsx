import React from 'react'

export default function ProductByIdReviewsById(props :{params :{productId : string; reviewId : string}}) {
  return (<>
    <div>Product of Id = {props.params.productId}</div>
    <div>Review of Id = {props.params.reviewId}</div>
    </>
  )
}
