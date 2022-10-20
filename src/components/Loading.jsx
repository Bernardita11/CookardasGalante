import styled from 'styled-components';

const LoadingSpinner = styled.div`
    @keyframes spinner {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }

    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
    z-index: 1;
    top: 43%;
    left: 48%;
    transform: translate(-50%, -50%);
    position: absolute;

`

const Loading = () => {
    return (
        <div>
            <LoadingSpinner />
        </div>
    )
}

export default Loading;