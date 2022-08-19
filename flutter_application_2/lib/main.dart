import 'package:flutter/material.dart';
import './result.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final appTitle = 'Todos List';
    return MaterialApp(
      title: appTitle,
      home: Scaffold(
        appBar: AppBar(
          title: Text(appTitle),
        ),
        body: MyCustomForm(),
      ),
    );
  }
}

class MyCustomForm extends StatefulWidget {
  @override
  MyCustomFormState createState() {
    return MyCustomFormState();
  }
}

class MyCustomFormState extends State<MyCustomForm> {
  final myController = TextEditingController();
  var result = [""];

  void answer() {
    setState(() {
      result[0] = "";
    });
  }

  var _resultIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
          child: TextField(
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              hintText: 'Enter item to add',
            ),
            onSubmitted: (String str) {
              setState(() {
                result[_resultIndex] = str + "\n";
                print(result[_resultIndex]);
                _resultIndex++;
                myController.text = "";
              });
            },
            controller: myController,
          ),
        ),
        ElevatedButton(onPressed: answer, child: Text("reset")),
        Result(result),
        // Container(
        //   alignment: Alignment.center,
        //   padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
        //   width: 300,
        //   decoration: BoxDecoration(
        //     border: Border.all(color: Colors.orange, width: 2.0),
        //   ),
        //   child: Text(
        //     result[0],
        //     style: TextStyle(fontSize: 20),
        //   ),
        // ),
      ],
    );
  }
}
