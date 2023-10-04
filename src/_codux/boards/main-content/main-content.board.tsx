import { createBoard } from '@wixc3/react-board';
import { MainContent } from '../../../components/main-content/main-content';

export default createBoard({
    name: 'MainContent',
    Board: () => <MainContent />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 532
    }
});
