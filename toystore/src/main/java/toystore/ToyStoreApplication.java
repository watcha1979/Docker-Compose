package toystore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class ToyStoreApplication {

    public static void main(String[] args){
        SpringApplication.run(ToyStoreApplication.class, args);
    }

}
