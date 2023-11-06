import fetchWithParams from "@/app/utils/fetchData/fetch"; 

it('there is no I in team', () => {
    fetchWithParams("loc", "POST");

    expect('team').toBe("team");
  });