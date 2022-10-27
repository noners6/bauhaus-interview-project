import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CustomCard = ({ props }) => {
  if (!props) return;

  const customCard = (
    <Card sx={{ maxWidth: 400, minWidth: 300 }}>
      <CardMedia
        component="img"
        alt="dog or cat"
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={"black"}>
          <span>{props.title}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );

  return <div>{customCard}</div>;
};

export default CustomCard;
