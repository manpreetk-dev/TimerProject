import { forwardRef,useImperativeHandle,useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime},ref) {

    const dialog=useRef();

    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();

            }
        };
    });
  return(

  //<dialog className="result-modal" open>
  <dialog ref={dialog} className="result-modal">
    <h2> You {result}</h2>
    <p>
     
      The Target time was <strong> {targetTime} seconds. </strong>
    </p>
    <p>You Stopped the timer with X seconds left</p>
    <form method="dialog">
      <button> Close</button>
    </form>
  </dialog>);
});
export default ResultModal;
