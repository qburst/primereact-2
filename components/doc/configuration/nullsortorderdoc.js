import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NullSortOrderDoc(props) {
    const code = {
        basic: `
import { PrimeReactContext } from 'primereact/api';
import { useMountEffect } from "primereact/hooks";

//use in a component
const { setNullSortOrder } = useContext(PrimeReactContext);

useMountEffect(() => {
   setNullSortOrder(1);
});
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Determines how <i>null</i> values are sorted. The default value of <i>1</i> means sort like Excel with all NULL values at the bottom of the list. A value of <i>-1</i> sorts NULL at the top of the list in ascending mode and at the
                    bottom of the list in descending mode.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
