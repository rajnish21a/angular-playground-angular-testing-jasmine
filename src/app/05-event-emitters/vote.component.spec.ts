import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;
  let voteChange = null;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when Upvoted', () => {
    component.voteChanged.subscribe(vc=>{
      voteChange = vc;
    })
    component.upVote();
    expect(voteChange).toBe(1)
  });
});
