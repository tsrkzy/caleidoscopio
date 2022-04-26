pub struct Game {
    pub score: i32,
}

impl Game {
    pub fn init(&self) {
        use web_sys::console;
        console::log_1(&self.score.into());
    }
}

pub struct Clock {
    pub ticks: i32,
}

impl Clock {
    pub fn tick(&mut self) {
        self.ticks += 1;
    }

    pub fn show(&self) {
        use web_sys::console;
        console::log_1(&self.ticks.into())
    }
}