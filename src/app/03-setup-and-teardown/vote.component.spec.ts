import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    let component: VoteComponent;
  beforeEach(()=>{
    component = new VoteComponent();
  });


  it('totalVotes should be 1 when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('totalVotes should be -1 when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
