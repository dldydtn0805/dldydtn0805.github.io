import styles from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function HomePage() {
  return (
    <div className={styles.wrapper}>
      <header>
        헤더
        <Link
          to="/posts"
          onClick={() => {
            Swal.fire({
              title: "포스트로 이동",
              text: "This is a SweetAlert2 modal.",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }}
        >
          포스팅
        </Link>
      </header>
      <main>메인</main>
      <footer>푸터</footer>
    </div>
  );
}

export default HomePage;
