export const INITIAL_DATA_STATE = {
   header: [
      // arry of objects {title and link}
   ],
   intro: {
      intro_title: "",
      intro_slogan: "",
      intro_img: "",
   },
   about: {
      about01: "",
      about02: "",
   },
   solution: [
      // array of object {header, string}
   ],
   partners: [
      // array of img links
   ],
   roadmap: [
      // arrays of roadmap list
   ],
};

export const DataReducer = (state, action) => {
   switch (action.type) {
      // case "HEADER":
      //    return { ...state, header: action.payload };
      // case "INTRO":
      //    return { ...state, intro: action.payload };

      // case "ABOUT":
      //    return { ...state, about: action.payload };
      // case "SOLUTION":
      //    return { ...state, solution: action.payload };
      // case "PARTNERS":
      //    return { ...state, partners: action.payload };
      case "DATA":
         return action.payload;
      default:
         break;
   }
};
