function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <>
      <footer>
        <div>
          <p>© {getYear()} Daniel Soden. All Rights Reserved.</p>
          <a href="mailto:danielsoden04@gmail.com" id="email-link">
            danielsoden04@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
