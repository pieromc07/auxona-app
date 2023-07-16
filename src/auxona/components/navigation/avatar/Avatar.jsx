
import avatar from '../../../../assets/avatars/1.jpg';
import './Avatar.css';

export const Avatar = () => {
    return (
        <div className='avatar'>
            <div className='avatar__image'>
                <img
                    src={avatar}
                    alt='Avatar'
                    className='avatar__image--img'
                />
            </div>
            <div className='avatar__username'>
                <h5 className='avatar__username--text'>Dave Cooper</h5>
            </div>
        </div>
    )
}
