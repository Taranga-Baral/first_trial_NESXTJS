
import React from 'react'
export const metadata = {
  title: "App-Blogs"
}
export default function BlogsCatchAll(props: { params: { slug: string | any[] } }) {
    const slug = props.params.slug;
    if (slug[0] == "programming") return <div>Hi There Programmers</div>;<br />
    if (slug[0] == "hithere") return <div>Hi Hello There</div>;<br />
  return (<>
  
    
    <h1 className="text-center pt-5">Blogs Catch All {props.params.slug[props.params.slug.length-1]}</h1>
    
    </>
  )
}
