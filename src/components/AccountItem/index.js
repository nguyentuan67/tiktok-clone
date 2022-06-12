import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d3e7f162c66123fc53843297e9331d9d.jpeg?x-expires=1653660000&x-signature=eQ118%2BATzAF9BdEhP0BURgQzRtw%3D" 
                alt="Tuann" 
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Tuan</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyentuann</span>
            </div>
        </div>
    )
}

export default AccountItem;