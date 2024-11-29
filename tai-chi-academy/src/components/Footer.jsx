import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer class="footer bg-black small text-center text-white-50">
        <div class="container px-4 px-lg-5">
          Tai Chi Academy &copy;{currentYear}
        </div>
        <div class="social d-flex justify-content-center">
          <Link
            class="mx-2 social-icon"
            to="https://www.youtube.com/@tai_chi_apeldoorn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-youtube"></i>
          </Link>
          <Link class="mx-5 social-icon" to="#!">
            <i class="fab fa-facebook-f"></i>
          </Link>
          <Link class="mx-2 social-icon" to="#!">
            <i class="fab fa-tiktok"></i>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
