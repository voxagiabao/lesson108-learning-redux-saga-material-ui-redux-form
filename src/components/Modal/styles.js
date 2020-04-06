const styles = (theme) => ({
  modal: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    boxShadow: theme.shadows[5],
    
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.color.textColor,
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontWeight: 700, color: theme.color.textColor },
  content: { padding: theme.spacing(2) },
  textTransform: "capitalize",
  icon: { cursor: "pointer", fontSize: 25 },
});

export default styles;
