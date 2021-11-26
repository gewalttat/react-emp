import express from 'express';
import 'ignore-styles';
import serverRenderer from '../serverRenderer';
import register from 'ignore-styles'
const app = express();
const PORT = 8000;

register(['.sass', '.scss'])
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.static('../public'));
app.use(serverRenderer());