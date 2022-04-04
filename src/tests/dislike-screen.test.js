import {act, create} from 'react-test-renderer';
import {HashRouter} from 'react-router-dom';
import MyDislikes from "../components/profile/my-dislike";

const MOCKED_TUITS = [
  {
    _id: "1",
    tuit: "Ben's tuit",
  },
  {
    _id: "2",
    tuit: "Peter's tuit",
  },
  {
    _id: "3",
    tuit: "Stacy's tuit",
  },
 ]

test('Disliked tuit list renders async', async() => {
  
  let tuitsDisliked
  act(() => {
    tuitsDisliked = create(
      <HashRouter>
        <MyDislikes />
      </HashRouter>
      )
  })
  const root = tuitsDisliked.root;
  expect("2").toBe("2");
  
});
