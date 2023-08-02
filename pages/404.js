import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <a style={styles.link}>Go back to the homepage</a>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
  },
  link: {
    color: "#0070f3",
    textDecoration: "underline",
    transition: "color 0.3s ease",
  },
};

export default NotFoundPage;
