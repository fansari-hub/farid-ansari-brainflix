import './CommentCounter.scss'

export default function CommentCounter(prop){
    const {counter} = prop
    return(
        <p className='CommentCounter font-Label'>{counter} Comments</p>
    );
}