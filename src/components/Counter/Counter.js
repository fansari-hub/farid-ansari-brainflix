import './Counter.scss'

export default function Counter(prop){
    const {title, counter} = prop
    return(
        <p className='Counter font-Label'>{counter} {title}</p>
    );
}