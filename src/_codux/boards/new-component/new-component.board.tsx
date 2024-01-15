import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/new-component/new-component';

export default createBoard({
    name: 'Composition',
    Board: () => <NewComponent />,
    isSnippet: false,
    environmentProps: {
        windowWidth: 998,
        windowHeight: 725
    }
});
