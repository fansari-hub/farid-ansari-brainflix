import './Counter.scss'

export default function CommentCounter(prop){
    const {title, counter} = prop
    return(
        <p className='CommentCounter font-Label'>{counter} {title}</p>
    );
}