import './Pagination.css';

function Pagination ({pageNumber,handleNext,handlePrevious}) {

    return (
        <div className="pagination">
            <div className="prev" onClick={handlePrevious}> Prev </div>
            <div> {pageNumber} </div>
            <div className="next" onClick={handleNext}> Next </div>
        </div>
    );
}

export default Pagination;