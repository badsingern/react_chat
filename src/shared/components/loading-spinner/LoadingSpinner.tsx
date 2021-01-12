import './LoadingSpinner.scss';

export const LoadingSpinner = () => {
    return <div className='loading-spinner'>
        <div className="lds-circle">
            <div></div>
        </div>
        <h2>Loading...</h2>
    </div>
}
