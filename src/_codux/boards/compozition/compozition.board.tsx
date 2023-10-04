import { createBoard } from '@wixc3/react-board';
import { Compozition } from '../../../components/compozition/compozition';

export default createBoard({
    name: 'Compozition',
    Board: () => <Compozition />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1288,
        windowHeight: 768,
        canvasWidth: 993,
        windowWidth: 1024
    }
});
