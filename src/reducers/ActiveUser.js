
export default function (state = null, action) {
        switch (action.type) {
          case "USER_SELECTED":
            return action.payload;
            // eslint-disable-next-line no-unreachable
            break;
        }
        return state;
} 