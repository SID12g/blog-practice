import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CloudBg from '@/public/Image/CloudBg.png'
import exProfile from '@/public/Image/ex-profile.jpeg'
import Link from "next/link";
import LoginBtn from "./LogInBtn";
export default function Information() {
    return (
        <div className="information">
            <div className="wrap-bg">
                <Image src={CloudBg} alt="background-image" fill={true} style={{ filter: "brightness(50%)" }} />
                <div className="profile-img">
                    <Image src={exProfile} alt="profile-image" width={100} height={100} style={{ borderRadius: 100 }} />
                </div>
                <div className="my-name">
                    <h3>Sungmin Cho</h3>
                </div>
                <div className="my-description">
                    <div className="my-email">
                        <div className="des-icon">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#fffff", width: "20px" }} />
                        </div>
                        <p className="des-text">sid12g@naver.com</p>
                    </div>
                    <Link href="https://github.com/SID12g">
                        <div className="my-github">
                            <div className="des-icon">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "#fffff", width: "20px" }} />
                            </div>
                            <p className="des-text">https://github.com/SID12g</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}