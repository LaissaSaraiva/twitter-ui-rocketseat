
interface TweetProps {
  user: string,
  children: string,
  likes?: number
}

export function Tweet(props: TweetProps) {

  console.log('Props:', props)
  return (
    <div className="tweet">
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button> Likes:  {props.likes ?? 0 }</button>
   
    </div>

  )
}