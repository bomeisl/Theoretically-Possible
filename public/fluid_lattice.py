import matplotlib as plt

class ParticleArray:
    def initialize_array(self):
        for i in range(0..n-1):
            row = []
            for j in range(0..m-1):
                #random_int = random.randint(0,1)
                #if random_int == 0:
                    particle = Particle(self.n,self.m)
                    particle.position = [i,j]
                    row.append(particle)
            self.array.append(row)

    def __init__(self, n, m):
        self.n = n
        self.m = m
        self.array = []
        self.initialize_array()

    def evolve_array(self):
        for i in range(0..n-1):
            for j in range(0..m-1):
                particle = self.array[i][j]
                particle.position[0] = particle.position[0] + particle.velocity[0]
                particle.position[1] = particle.position[1] + particle.velocity[1]

    def plot_array(self):
        x_points = []
        y_points = []
        for i in range(0..n-1):
            for j in range(0..m-1):
                x_points.append(array[i][j][0])
                y_points.append(array[i][j][1])
        graph = plt.plot(x_points,y_points)
        display(graph, "mpl")


class Particle:
    def __init__(self, width, height):
        self.position = [0,0]
        self.velocity_array = [
                [0, 1],
                [1, 0],
                [1, 1],
                [0, -1],
                [-1, 0],
                [-1, -1],
                [-1, 1],
                [1, -1]
            ]
        self.velocity = self.velocity_array[2]
        self.exists = True

        def update_position(old_position, velocity):
            return old_position + velocity

        def head_on_collision():
            # [0,1] and [0,-1]
            if self.velocity == [0, 1]:
                return [1,0]
            # [0,-1] and [0,1]
            if self.velocity == [0, -1]:
                return [-1,0]
            # [1,0] and [-1,0]
            if self.velocity == [1, 0]:
                return [0,1]
            # [-1,0] and [1,0]
            if self.velocity == [-1, 0]:
                return [0,-1]
            # [1,1] and [-1,-1]
            if self.velocity == [1, 1]:
                return [1,-1]
            # [-1,-1] and [1,1]
            if self.velocity == [-1, -1]:
                return [-1,1]
            # [-1,1] and [1,-1]
            if self.velocity == [-1, 1]:
                return [1,1]
            # [1,-1] and [-1,1]
            if self.velocity == [1, -1]:
                return [-1,-1]

particle_array = ParticleArray(50,50)
particle_array.plot_array()




















